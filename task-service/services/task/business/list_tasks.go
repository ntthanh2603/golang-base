package business

import (
	"context"
	"demo-service/services/task/entity"
	"github.com/viettranx/service-context/core"
)

func (biz *business) ListTasks(ctx context.Context, filter *entity.Filter, paging *core.Paging) ([]entity.Task, error) {
	tasks, err := biz.taskRepo.ListTasks(ctx, filter, paging)

	if err != nil {
		return nil, core.ErrInternalServerError.
			WithError(entity.ErrCannotListTask.Error()).
			WithDebug(err.Error())
	}

	// Get extra infos: User
	userIds := make([]int, len(tasks))

	for i := range userIds {
		userIds[i] = tasks[i].UserId
	}

	users, err := biz.userRepo.GetUsersByIds(ctx, userIds)

	mUser := make(map[int]core.SimpleUser, len(users))
	for i := range users {
		mUser[users[i].Id] = users[i]
	}

	for i := range tasks {
		if user, ok := mUser[tasks[i].UserId]; ok {
			tasks[i].User = &user
		}
	}

	if err != nil {
		return nil, core.ErrInternalServerError.
			WithError(entity.ErrCannotListTask.Error()).
			WithDebug(err.Error())
	}

	return tasks, nil
}
