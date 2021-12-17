module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '34be3d687aaa6eda83be89a1fd589d97'),
  },
});
