import Mock from 'mockjs';
import userInfo from './userInfo.json';

Mock.mock('/users', 'get', userInfo);
Mock.mock('/user_auth', 'get', userInfo);
