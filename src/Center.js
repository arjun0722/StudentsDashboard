import React from "react";
import "./Center.css";
import "antd/dist/antd.css";

import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Center() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      class: "8th",
      marks: "10/100",
    },
    {
      id: 2,
      name: "David",
      class: "9th",
      marks: "20/100",
    },
    {
      id: 3,
      name: "James",
      class: "10th",
      marks: "40/100",
    },
    {
      id: 4,
      name: "Sam",
      class: "11th",
      marks: "50/100",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Class",
      dataIndex: "class",
    },
    {
      key: "4",
      title: "Marks",
      dataIndex: "marks",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      class: randomNumber + "th",
      marks: randomNumber + "/100",
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="topmost">
      <div className="center">
        <div className="App">
          <header className="App-header">
            <div class="title-container">
              <div>
                <h1>Students</h1>
              </div>
              <div className="btn-butt">
                <Button className="button-btn" onClick={onAddStudent}>
                  Add a new Student
                </Button>
              </div>
            </div>
            <div class="table-container">
              <Table columns={columns} dataSource={dataSource}></Table>
            </div>
            <Modal
              title="Edit Student"
              visible={isEditing}
              okText="Save"
              onCancel={() => {
                resetEditing();
              }}
              onOk={() => {
                setDataSource((pre) => {
                  return pre.map((student) => {
                    if (student.id === editingStudent.id) {
                      return editingStudent;
                    } else {
                      return student;
                    }
                  });
                });
                resetEditing();
              }}
            >
              <Input
                value={editingStudent?.name}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, name: e.target.value };
                  });
                }}
              />
              <Input
                value={editingStudent?.class}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, class: e.target.value };
                  });
                }}
              />
              <Input
                value={editingStudent?.marks}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, marks: e.target.value };
                  });
                }}
              />
            </Modal>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Center;
