package composer

import (
	"demo-service/common"
	taskBusiness "demo-service/services/task/business"
	taskSQLRepository "demo-service/services/task/repository/mysql"
	taskUserRPC "demo-service/services/task/repository/rpc"
	taskAPI "demo-service/services/task/transport/api"
	"github.com/gin-gonic/gin"
	sctx "github.com/viettranx/service-context"
)

type TaskService interface {
	CreateTaskHdl() func(*gin.Context)
	GetTaskHdl() func(*gin.Context)
	ListTaskHdl() func(*gin.Context)
	UpdateTaskHdl() func(*gin.Context)
	DeleteTaskHdl() func(*gin.Context)
	DoneTaskHdl() func(*gin.Context)
	DoingTaskHdl() func(*gin.Context)
}

func ComposeTaskAPIService(serviceCtx sctx.ServiceContext) TaskService {
	db := serviceCtx.MustGet(common.KeyCompMySQL).(common.GormComponent)

	userClient := taskUserRPC.NewClient(composeUserRPCClient(serviceCtx))
	taskRepo := taskSQLRepository.NewMySQLRepository(db.GetDB())
	biz := taskBusiness.NewBusiness(taskRepo, userClient)
	serviceAPI := taskAPI.NewAPI(serviceCtx, biz)

	return serviceAPI
}
