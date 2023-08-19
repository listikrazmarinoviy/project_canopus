# Project Canopus

[projectcanopus.net](https://projectcanopus.net/)

### Tools and Concepts for web-development:
- ESlint - VSCode Extension Id: dbaeumer.vscode-eslint
- Prettier - VSCode Extension Id: esbenp.prettier-vscode
- BEM CSS
- Gitflow Workflow

### Running locally

- Clone the repository
 ```
 git clone https://github.com/listikrazmarinoviy/project_canopus.git
 ```

- Enter the directory project
  ```
  cd project_canopus
  ```

- Install all dependencies
  ```
  npm install
  ```

- Start dev server
  ```
  npm run dev
  ```

### Gitflow commands
- Initialize Gitflow 
  ```
  git flow init
  ```

  Note: this will create a branch named 'develop'. All answers must be default (just use 'Enter' for everything).

- Start a new feature
  ```
  git flow feature start MYFEATURE
  ```

  Note: this will create a branch named "feature/MYFEATURE". Make all the changes here.

After you update and finish your feature, create a Pull Request:
- Enter to https://github.com/listikrazmarinoviy/project_canopus/pulls
- Click on "New pull request" green button
- Select base: develop and compare: YOUR FEATURE
- Click on "Create pull request"
- Select a Reviewer and click on "Create Pull Request"

Reminder: never modify main and develop branches directly.

### Important links for Project Canopus team:

- [How To Structure React Projects From Beginner To Advanced](https://blog.webdevsimplified.com/2022-07/react-folder-structure/) 
- [BEM CSS](https://getbem.com/introduction/)
- [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Code Review Best Practices](https://roadmap.sh/best-practices/code-review)
- [Meaningful commit messages](https://reflectoring.io/meaningful-commit-messages/)