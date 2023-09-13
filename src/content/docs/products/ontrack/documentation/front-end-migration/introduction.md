---
title: Entry point of OnTrack UIEnhancemnt
---

## T3 / 2022

OnTrack is now a hybrid project which is using Bootstrap/AngularJS + MUI/Angular, it is build using
different reusable components.

AngularJS support has officially ended as of **January 2022**. The code will remain accessible on
GitHub, npm, Bower, and Release archive. This website will remain here indefinitely. The GitHub
repository will be in an archived state, meaning that no new issues or pull requests can be
submitted. CoffeeScript can be viewed as a fine complement to JavaScript, not a replacement.

Therefore, the OnTrack frontend is looking forward to switching to the new MUI/Angular approach and
trying to keep things more up to date going forward.

## Aims for Trimester

---

1. Testing new branch

   - We have a special request from our director Andrew that we need to execute some on testing the
     doubtfire-web(quality/entity-service-to-npm) branch with
     doubtfire-api(refactor/entity-service-backend), write up some test scripts for people to run to
     verify that things work branch.
   - Tests cases can just be actions for someone to perform. Now those branches have migrated much
     of the front end. We now need to exhaustively test it to make sure things work. Log the issue
     and report to director

2. Components Migration

   - There is **168 components** waiting to be migrated, in T3/2022, I hope we can continue the work
     that we left in previous trimester and assign some simple components for Juniors. Delivery lead
     should involve continuing the ongoing components, seniors should continue his work from
     previous trimester.

## Deliverables

---

### Short Term

- Gather information and continue the migration work that left from previous trimester.
- Develop and deliver at least 5 migrated components.
- Understand and plan for testing new branch
- Give Juniors OnTrack ASAP.
- Improve and fix outdated documents.

**_Long Term:_**

- Give enough passion for junior to involve into the same project next trimester
- Extent documentation for new member to be able to understand the project quickly.

## **What to do next**

---

If you are new member into this team, welcome! and we are going to guide you step by step to show
you what you sould do next if you are:

**_Junior_**

As a junior we suggest that you should:

1. Do Upskilling understand the basic of AngularJS and Angular framework.
   - [Learning AngularJS A Guide to AngularJS Development](https://www.amazon.com.au/Learning-AngularJS-Guide-Development-ebook/dp/B00UW1MATQ)
     (ISBN 978-1491916759)
   - [Angular JS tutorial](https://www.youtube.com/playlist?list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl)
   - _To be added in next-trimester_
2. Set up the project on your local machine. For Windows user, you need to do an extra step to
   inistall a **WSL2 virtual machine**. Make sure you dont have VMware or VirtualBox installed that
   will enable the HyperV feature which **conflict** with Docker.
   - **Windows (WSL2)**
     1. Follow [Docker Compose with WSL2](Docker/Docker_Compose_with_WSL2.md) guideline.
     2. Read [Docker Setup Tutorial](Docker/Docker_Setup_Tutorial.md) guideline.
     3. Watch
        [Docker Setup Tutorial](https://drive.google.com/file/d/16A5zzG3g0S1B0PCKWrFK9anLhheXgi_b/view?usp=sharing)
        > Please note that the tutorial used Windows CMD enviroment, it should use WSL2 machine
        > instead. See the
        > [issue](https://teams.microsoft.com/l/message/19:bd20175d09414f079490a2403f7fca74@thread.tacv2/1659408245022?tenantId=d02378ec-1688-46d5-8540-1c28b5f470f6&groupId=0e15669c-3f66-49aa-b023-640fe1dda2e0&parentMessageId=1659398288375&teamName=Thoth).
   - **Mac / Linux**
     1. Read [Docker Setup Tutorial](Docker/Docker_Setup_Tutorial.md) guideline.
        > If the servers in the docker running into issues, please follow the backup plan -
        > [Troubleshooting Docker - Backup for OnTrack](Docker/Troubleshooting_Docker_Backup_for_OnTrack.md)
3. Migration
   1. Read [Create Brach and Initial Migration](Migration/Create_Branch_and_Initial_Migration)
      guideline.
   2. Read [Regular Commit](Migration/Regular_Migration_Step.md) guideline.
4. Testing
   1. Read [Unit Test](Testing/Unit_Test.md) guideline.
5. Do **report any issue** or questions to the senior or deilvery lead.
6. **Writting docemnts** during the learning process which you found intresting or worth to know.
7. Start to migrate some simple components.

**_Senior_**

1. Answer question from junior report the issue to the lead if no solution.
2. Carry on the components that are in the middle of migrating in last trimester.

---

**Once again, welcome to the team!**
