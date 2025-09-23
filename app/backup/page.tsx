'use client';
import React from 'react';
import { Avatar } from '@heroui/avatar';
import { Image } from "@heroui/image";
import { Card } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { Accordion, AccordionItem, Link } from '@heroui/react';
import resume, { about, projects, workExperience, stacks } from '@/config/data/resume';

// 锚点图标组件
const AnchorIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"
      fill="currentColor"
    />
    <path
      d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"
      fill="currentColor"
    />
  </svg>
);

// 主页组件
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-serif items-center pt-24 dark:bg-gray-900">
      {/* 个人简介 */}
      <div id="profile" className="w-full flex flex-row items-start justify-center  py-16 px-4 md:px-8 lg:px-16 max-w-5xl">
        <Image
          alt="个人头像"
          src="https://heroui.com/images/album-cover.png"
          fallbackSrc="https://via.placeholder.com/300x200"
          isBlurred
          isZoomed
          width={300}
          height={384}
        />
        <div className="w-auto flex flex-col justify-start px-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-600 dark:text-white mt-2">Sggmico （黑白灰）</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">拥抱前后端技术，思维开放，乐于学习分享，在公司内部技术分享超过10场，也有参与外部社区。</p>

          {/* 技术栈 */}
          <h2 className="text-base font-bold dark:text-gray-300 mb-4">技术栈</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-8">{stacks.join('  /  ')}</p>

          {/* 工作经历 */}
          <h2 className="text-base font-bold dark:text-gray-300 mb-4">工作经历</h2>
          {workExperience.map(work => (
            <div key={work.id} className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                <span className="text-sm text-gray-400">-</span>
                <span className="font-medium">{work.title}</span>
                <span className="text-gray-400">|</span>
                <span>{work.timerange}</span>
                <span className="text-gray-400">|</span>
                <span>{work.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 项目经验 */}
      <section id="projects" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800">
        <div className="w-full max-w-4xl mx-auto p-6">
          <h2 className="text-xl font-bold mb-6 dark:text-white">项目经验</h2>
          <Accordion isCompact selectionMode="multiple" defaultExpandedKeys={['1', '2']}>
            {projects.map(project => (
              <AccordionItem
                key={project.id}
                aria-label={project.title}
                startContent={<AnchorIcon />}
                subtitle={
                  <p className="text-xs text-gray-600 dark:text-gray-300">{project.description}</p>
                }
                title={
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <span className="font-bold dark:text-gray-100">{project.typeName}：</span>
                      <span className="text-sm dark:text-gray-100 mr-1">{project.title}</span>
                      <span className="text-sm dark:text-gray-100">{project.timerange}</span>
                    </div>
                    <div className="flex gap-1">
                      {project.tags.map((tag, idx) => (
                        <Chip
                          key={idx}
                          size="sm"
                          variant="flat"
                          color={tag[1] as "secondary" | "danger" | "primary" | "default" | "success" | "warning"}
                        >
                          {tag[0]}
                        </Chip>
                      ))}
                      <Chip color="warning" size="sm" variant="flat">{project.role}</Chip>
                    </div>
                  </div>
                }
              >
                <div className="text-sm text-gray-600 dark:text-gray-300 px-10 pb-3">
                  {project.difficulties.length > 0 && (
                    <>
                      <h3 className="text-sm font-bold mb-2 text-gray-800 dark:text-gray-100">难点：</h3>
                      <ul className="mb-3 px-2">
                        {project.difficulties.map((difficulty, index) => (
                          <li className="text-xs mb-2" key={index}>● {difficulty}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {project.highlights.length > 0 && (
                    <>
                      <h3 className="text-sm font-bold text-gray-800 mb-2 dark:text-gray-100">亮点：</h3>
                      <ul className="mb-3 px-2">
                        {project.highlights.map((highlight, index) => (
                          <li className="text-xs mb-2" key={index}>● {highlight}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <h3 className="text-sm font-bold my-4 text-gray-800 dark:text-gray-100">
                    技术栈：<span className="font-normal text-gray-600 dark:text-gray-300 ">{project.stacks.join(' / ')}</span>
                  </h3>

                  <div className="flex gap-2">
                    {['Paper', 'Code', 'Demo'].map(type => (
                      <Link
                        key={type}
                        showAnchorIcon
                        size="sm"
                        color="primary"
                        underline="hover"
                        href="#"
                        className="text-xs scale-95"
                      >
                        [{type}]
                      </Link>
                    ))}
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 技术成果 */}
      <section id="achievements" className="w-full py-16 px-4 md:px-8 lg:px-16">
        <Card className="w-full max-w-4xl mx-auto p-6">
          <h2 className="text-xl font-bold mb-6 dark:text-white">技术成果</h2>
          <div className="text-sm dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-bold mb-2">1. 资源流量管理平台</h3>
              <p>基于区块链技术的企业流量资源管理与分配平台</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">2. ReactNative工程框架</h3>
              <ul className="list-disc pl-5">
                <li>支持2款APP的工程骨架设计</li>
                <li>深度定制react-navigation与原生能力</li>
                <li>实现图片水印、定位打点上报、地图定制等功能</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">3. Node.js服务框架</h3>
              <ul className="list-disc pl-5">
                <li>搭建6个Node.js服务，3个插件</li>
                <li>集成Egg-gateway/kafka/elasticsearch等多个功能模块</li>
                <li>支持微信OA/dubbo/redis等企业级服务</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
      {/* 社区贡献 */}
      {/* <section id="community" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800">
        <Card className="w-full max-w-4xl mx-auto p-6">
          <h2 className="text-xl font-bold mb-6 dark:text-white">技术成果</h2>
          <div className="text-sm dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-bold mb-2">1. 资源流量管理平台</h3>
              <p>基于区块链技术的企业流量资源管理与分配平台</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">2. ReactNative工程框架</h3>
              <ul className="list-disc pl-5">
                <li>支持2款APP的工程骨架设计</li>
                <li>深度定制react-navigation与原生能力</li>
                <li>实现图片水印、定位打点上报、地图定制等功能</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">3. Node.js服务框架</h3>
              <ul className="list-disc pl-5">
                <li>搭建6个Node.js服务，3个插件</li>
                <li>集成Egg-gateway/kafka/elasticsearch等多个功能模块</li>
                <li>支持微信OA/dubbo/redis等企业级服务</li>
              </ul>
            </div>
          </div>
        </Card>
      </section> */}
    </main >
  );
}