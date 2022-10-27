import React from "react";
import { Card, Table, Button } from "antd";

function UserList(props) {
	const columns = [
		{
			title: "Id",
			dataIndex: "id",
		},
		{
			title: "Tài khoản",
			dataIndex: "username",
			render: (_, user) => {
				return <h3>{user.username}</h3>;
			},
		},
		{
			title: "Họ Tên",
			dataIndex: "name",
		},
		{
			title: "Email",
			dataIndex: "email",
		},
		{
			title: "Số ĐT",
			dataIndex: "phone",
		},
		{
			title: "Mã loại người dùng",
			dataIndex: "role",
		},
		{
			title: "",
			key: "action",
			render: (_, user) => {
				return (
					<>
						<Button onClick={() => props.getUpdateUser(user)} type="primary">
							Sửa
						</Button>
						<Button onClick={() => props.deleteUser(user.id)}>Xoá</Button>
					</>
				);
			},
		},
	];

	return (
		<Card
			title="Danh Sách SV"
			headStyle={{ backgroundColor: "#000", color: "#fff" }}
		>
			<Table
				dataSource={props.users.map((user) => {
					return { ...user, key: user.id };
				})}
				columns={columns}
			></Table>
		</Card>
	);
}

export default UserList;
