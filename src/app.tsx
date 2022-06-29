// 运行时配置
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';

import services from '@/services/demo';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  name?: string;
}> {
  return {
    settings: {},
    name: 'simon',
  };
}

export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  return {
    // 常用配置
    title: '微前端Demo',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    layout: 'mix',
    splitMenus: true,
    // 默认布局调整
    // 动态覆盖
    ...initialState?.settings,
  };
};

const { queryApps } = services.UserController;
export const qiankun = async () => {
  const res = await queryApps();

  return {
    apps: res?.data || [],
    routes: [
      {
        path: '/app1',
        microApp: 'app1',
      },
    ],
  };
};
