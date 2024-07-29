import { dailyUsingPost, getMyPointsUsingGet } from '@/services/backend/pointsController';
import { getLoginUserUsingGet, updateMyUserUsingPost } from '@/services/backend/userController';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import {
  Button,
  Card,
  Col,
  Descriptions,
  DescriptionsProps,
  Form,
  FormProps,
  Input,
  message,
  Row,
  Tooltip,
} from 'antd';
import React, { useEffect, useState } from 'react';
const Admin: React.FC = () => {
  type FieldType = {
    userAccount?: string;
    userPassword?: string;
  };

  const [point, setPoint] = useState<number>(100);
  const [form] = Form.useForm();

  useEffect(() => {
    loadUserPoint();
    loadUserInfo();
  }, []);

  /**
   * 获取当前用户信息
   */
  const loadUserInfo = async () => {
    try {
      // 需要取到上传的原始数据file→file→originFileObj(原始数据)
      const res = await getLoginUserUsingGet();
      // 正常情况下，如果没有返回值就分析失败，有，就分析成功
      if (!res?.data) {
        message.error(res.message);
      } else {
        // 获取成功，设置用户信息
        form.setFieldsValue(res.data);
      }
    } catch (e: any) {
      message.error('获取用户信息失败,' + e.message);
    } finally {
    }
  };

  const loadUserPoint = async () => {
    try {
      // 需要取到上传的原始数据file→file→originFileObj(原始数据)
      const res = await getMyPointsUsingGet();
      // 正常情况下，如果没有返回值就分析失败，有，就分析成功
      if (!res?.data) {
        message.error('获取积分数失败');
      } else {
        setPoint(res.data);
      }
      // 异常情况下，提示分析失败+具体失败原因
    } catch (e: any) {
      message.error('获取积分数失败,' + e.message);
    } finally {
    }
  };

  const daily = async () => {
    try {
      // 需要取到上传的原始数据file→file→originFileObj(原始数据)
      const res = await dailyUsingPost();
      // 正常情况下，如果没有返回值就分析失败，有，就分析成功
      if (!res?.data) {
        message.error(res.message);
      } else {
        if (res.data == true) {
          loadUserPoint();
        } else {
        }
      }
      // 异常情况下，提示分析失败+具体失败原因
    } catch (e: any) {
      message.error('领取积分失败,' + e.message);
    } finally {
    }
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    // 修该用户信息
    updateMyUserUsingPost({
      userAccount: values.userAccount,
      userPassword: values.userPassword,
    }).then((res) => {
      if (res.code == 0) {
        message.success('修改成功');
        loadUserInfo();
      } else {
        message.error('修改失败');
      }
    });
  };

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '剩余积分',
      children: point,
    },
    {
      key: '2',
      label: '领取',
      children: (
        <Tooltip placement="bottom" title={'每天登录可领取随机数量的免费积分哦~~~'} arrow={true}>
          <Button onClick={daily}>每日领取</Button>
        </Tooltip>
      ),
    },
  ];

  return (
    <PageContainer>
      <Row gutter={24}>
        <Col span={12}>
          <Card title="个人信息">
            <Form
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              labelAlign="right"
              style={{ maxWidth: 600 }}
              form={form}
            >
              <Form.Item<FieldType> label="账户" name="userAccount">
                <Input />
              </Form.Item>

              <Form.Item<FieldType> label="密码" name="userPassword">
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  修改
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="签到领取积分">
            <Descriptions column={1} items={items} />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Admin;
