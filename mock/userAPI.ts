const users = [
  { id: '1', name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: '2', name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

const apps = [
  {
    name: 'pangujs-micro-nav',
    entry: '//localhost:7001',
  },
  {
    name: 'app1',
    entry: '//localhost:7002',
  },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'GET /api/v1/queryApps': (req: any, res: any) => {
    res.json({
      success: true,
      data: apps,
      errorCode: 0,
    });
  },
};
