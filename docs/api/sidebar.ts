import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/task-management-api",
    },
    {
      type: "category",
      label: "01 Tasks - Views",
      items: [
        {
          type: "doc",
          id: "api/get-assigned-tasks",
          label: "Get assigned tasks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-starred-tasks",
          label: "Get starred tasks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-todays-tasks",
          label: "Get today's tasks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-upcoming-tasks",
          label: "Get upcoming tasks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-overdue-tasks",
          label: "Get overdue tasks",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "02 Tasks",
      items: [
        {
          type: "doc",
          id: "api/list-tasks-in-a-list",
          label: "List tasks in a list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-a-new-task",
          label: "Create a new task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-task-by-id",
          label: "Get task by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-task",
          label: "Update task",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-task",
          label: "Delete task",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/move-task-to-another-list",
          label: "Move task to another list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reorder-task-within-list",
          label: "Reorder task within list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/add-tag-to-task",
          label: "Add tag to task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clear-completed-tasks",
          label: "Clear completed tasks",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "03 Lists",
      items: [
        {
          type: "doc",
          id: "api/list-all-task-lists",
          label: "List all task lists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-a-new-task-list",
          label: "Create a new task list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-list-by-id",
          label: "Get list by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-list",
          label: "Update list",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-list",
          label: "Delete list",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/leave-shared-list",
          label: "Leave shared list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reorder-task-lists",
          label: "Reorder task lists",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "04 Notes",
      items: [
        {
          type: "doc",
          id: "api/list-all-notes",
          label: "List all notes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-a-new-note",
          label: "Create a new note",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-note-by-id",
          label: "Get note by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-note",
          label: "Update note",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-note",
          label: "Delete note",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "05 Notifications",
      items: [
        {
          type: "doc",
          id: "api/list-user-notifications",
          label: "List user notifications",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/mark-all-notifications-as-read",
          label: "Mark all notifications as read",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/mute-unmute-notifications-for-an-entity",
          label: "Mute/unmute notifications for an entity",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/clear-all-notifications",
          label: "Clear all notifications",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-notification-by-id",
          label: "Get notification by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-single-notification",
          label: "Delete single notification",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/mark-single-notification-as-read",
          label: "Mark single notification as read",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "06 Search",
      items: [
        {
          type: "doc",
          id: "api/global-search",
          label: "Global search",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
