/**
 * 项目部署配置
 */

const RELEASE_PROJECT_NAME = '/cityPlan_releast' //部署时的项目名
const DEVELOP_PROJECT_NAME = '/cityPlanDev' //开发时的项目名

//开发环境
const dev = process.env.NODE_ENV === 'development'

//生产环境
const prod = process.env.NODE_ENV === 'production'

//测试环境
const test = process.env.NODE_ENV === 'testing'

const PROJECT_NAME = dev ? DEVELOP_PROJECT_NAME : RELEASE_PROJECT_NAME

export { PROJECT_NAME }