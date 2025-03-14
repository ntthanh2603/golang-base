package composer

import (
	"demo-service/common"
	"demo-service/proto/pb"
	userBusiness "demo-service/services/user/business"
	userSQLRepository "demo-service/services/user/repository/mysql"
	userApi "demo-service/services/user/transport/api"
	userRPC "demo-service/services/user/transport/rpc"
	"github.com/gin-gonic/gin"
	sctx "github.com/viettranx/service-context"
)

type UserService interface {
	GetUserProfileHdl() func(*gin.Context)
}

func ComposeUserAPIService(serviceCtx sctx.ServiceContext) UserService {
	db := serviceCtx.MustGet(common.KeyCompMySQL).(common.GormComponent)

	userRepo := userSQLRepository.NewMySQLRepository(db.GetDB())
	biz := userBusiness.NewBusiness(userRepo)
	userService := userApi.NewAPI(biz)

	return userService
}

func ComposeUserGRPCService(serviceCtx sctx.ServiceContext) pb.UserServiceServer {
	db := serviceCtx.MustGet(common.KeyCompMySQL).(common.GormComponent)

	userRepo := userSQLRepository.NewMySQLRepository(db.GetDB())
	userBiz := userBusiness.NewBusiness(userRepo)
	userService := userRPC.NewService(userBiz)

	return userService
}
