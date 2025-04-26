import React from 'react';
import {Avatar} from '@heroui/avatar';
import {Badge} from '@heroui/badge';
import {Card} from '@heroui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 dark:bg-gray-900">
      {/* 顶部介绍 */}
      <div className="w-full flex flex-col items-center justify-center py-16">
        <Badge color="primary" content="Hi" size="sm">
          <Avatar radius="md" size="lg" src="/Oxsggmico.jpg" />
        </Badge>
        <h1 className="text-4xl font-bold mb-6 dark:text-white mt-4">Sggmico （黑白灰）</h1>
        <p className="text-sm dark:text-gray-300 mb-4">拥抱前后端技术，思维开放，乐于学习分享，在公司内部技术分享超过10场，也有参与外部社区。</p>
        <p className="text-sm dark:text-gray-300 mb-1">部分编辑功能开发与后端联调</p>
        <p className="text-sm dark:text-gray-300 mb-1">作品列表与操作</p>
      </div>
      
      {/* 个人简介区域 */}
      <section id="profile" className="w-full py-16 px-4 md:px-8 lg:px-16">
        <Card className="w-full max-w-4xl mx-auto p-6">
          <h2 className="text-xl font-bold mb-6 dark:text-white">个人简介</h2>
          <p className="text-sm dark:text-gray-300 mb-4">这里是个人简介内容，可以介绍自己的背景、兴趣和目标等。</p>
        </Card>
      </section>
      
      {/* 技术栈区域 */}
      <section id="tech-stack" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800">
        <Card className="w-full max-w-4xl mx-auto p-6">
          <h2 className="text-xl font-bold mb-6 dark:text-white">技术栈</h2>
          <p className="text-sm dark:text-gray-300 mb-4">TypeScript / Nodejs / React+ / Vue+ / Solidity / Python</p>
        </Card>
      </section>
      
      {/* 技术成果区域 */}
      <section id="achievements" className="w-full py-16 px-4 md:px-8 lg:px-16">
        <Card className="w-full max-w-4xl mx-auto p-6">
          <h2 className="text-xl font-bold mb-6 dark:text-white">技术成果</h2>
          <p className="text-sm dark:text-gray-300 mb-4">1. 资源流量管理平台
2. A框架： ReactNative 工程骨架设计，支持2款APP
    1. 深度定制react-navigation/原生能力（图片水印、定位打点上报、地图定制）
3. B框架：js 工程骨架，搭建6个Node.js服务，3个插件
    1. Egg-gateway/egg-kafka/egg-buil/egg-elasticsearch
    2. Egg-wechat-oap/egg-dubbo/egg-redis/egg-wechat-mini/egg-rds
4. C系统：设计实现及重构多端的构建发布系统
    1. ReactNative打包/推包/包加解密/热更新服务/原生安装服务
    2. PC/H5/小程序 打包构建/版本管理/发布
5. D工具：跨端应用研发上线集中管理
    1. PC/H5/小程序/APP 任务层抽象、Jenkins替换
    2. 全自动化补全APP上架更新流程
6. E系统：多端全链路监控系统
    1. 支持超过40个跨端应用（PC/H5/APP/小程序）</p>
        </Card>
      </section>
      
      {/* 项目经验区域 */}
      <section id="projects" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800">
        <Card className="w-full max-w-4xl mx-auto p-6">
          <h2 className="text-xl font-bold mb-6 dark:text-white">项目经验</h2>
          <p className="text-sm dark:text-gray-300 mb-4">这里可以详细介绍您参与过的项目，包括项目描述、您的角色和贡献等。</p>
        </Card>
      </section>
    </main>
  );
}