import React, { useRef } from "react";
import { Button, Card, Table, Input } from "antd";

function StudentList(props) {
	const columns = [
		{
			title: "Mã SV",
			dataIndex: "studentId",
		},
		{
			title: "Họ Tên",
			dataIndex: "name",
			// Can thiệp vào UI để chỉnh sửa CSS
			render: (_, record) => {
				return <h3>{record.name}</h3>;
			},
		},
		{
			title: "Số ĐT",
			dataIndex: "phone",
		},
		{
			title: "Email",
			dataIndex: "email",
		},
		{
			title: "",
			key: "action",
			render: (_, record) => {
				// Tham số đầu tiên không có dùng
				// Tham số thứ 2 user là đối tượng ở lần lặp hiện tại
				return (
					<>
						<Button
							onClick={() => props.getUpdateStudent(record)}
							type="primary"
						>
							sửa
						</Button>
						<Button onClick={() => props.deleteStudent(record.studentId)}>
							Xoá
						</Button>
					</>
				);
			},
		},
	];

	// Find
	const inputEl = useRef("");
	const getSearchTerm = () => {
		props.searchKeyword(inputEl.current.value);
	};

	return (
		<div>
			<Card
				title="Danh Sách"
				headStyle={{ backgroundColor: "#000", color: "#fff" }}
			>
				<Table
					dataSource={props.studentList.map((item) => {
						return { ...item, key: item.studentId };
					})}
					columns={columns}
				></Table>
			</Card>

			<Card
				title="Tìm"
				headStyle={{ backgroundColor: "#000", color: "#fff" }}
			>
				<input
					ref={inputEl}
					value={props.term}
					onChange={getSearchTerm}
					type="text"
					placeholder="Nhập bất kì để tìm kiếm ...."
				/>
			</Card>
		</div>
	);
}

export default StudentList;
