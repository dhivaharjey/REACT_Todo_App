# React + Vite

---

---

## React + Vite

- Step 1: Create a new Vite project
  To create a new Vite project, open your terminal and run the following command:

- `npm create vite@latest  your-project-name `
- Replace your-project-name with the name you want for your project. Vite supports many frameworks, but in this case, we specify the react template with the `--template` option `React`.

- Step 2: Navigate to the project directory
  Once the Vite project is created, navigate to the project directory:

  `cd your-project-name`

- Don’t forget to replace your-project-name with the actual name you chose for your project (unless of course, you want to keep this name for your project).

- Step 3: Install dependencies and run the development server
  Next, install the necessary dependencies and start the development server:

- `npm run devi`

- `cd your-project-name`
- `npm i`
- `npm run dev`
- After running these commands, you should see a message in your terminal indicating that your React website is running on a specific port, it’s usually a ‘random’ port number like `http://localhost:5173.`

- Now, open your browser and visit the provided URL to see your React website in action.

- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

# React Todo App

- In the Inpurt field you can create todo with **_Title_** and **_Description_** using `Add` button.
- It will show the created Todo Task with **Title , Description & Status** in Cards.
- By default status will be **_Not Completed_** for created todos.
- There should be two buttons in the name of `Edit` and` Delete` which used to perform _Update_ and _Delete_ created todos.
- If you click `Edit` button in the respective todo card `Two Input` field will open to Update the _Title and Description_ at the same time `Edit` button will changed to `Update`.
- After Updation again the `Update` button will change into `Edit` button.
- By onclick on status it will show a dropdown if the todo status is already `Completed` it will show `Not Completed` on the dropdown like vice versa by that we can change the status of todo.
- There is a filter option to display status **_All, Completed and Not completed_** statuses of todos.
- If you choose `All` it will show both **Completed and Not completed** todos.
- If you choose `Completed` it will show only **Completed** status of todos .
- If you choose `Not Completed` it will show only **Not Completed** status of todos.

> Thanks for visiting.....😊
