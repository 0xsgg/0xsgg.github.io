/**
 * 全局环境变量配置
 */

/** 是否为开发环境 */
export const isDev = process.env.NODE_ENV === 'development'

/** 是否为生产环境 */
export const isProd = process.env.NODE_ENV === 'production'

/** 当前环境名称 */
export const nodeEnv = process.env.NODE_ENV
