# Entry point of OnTrack UIEnhancemnt

The overarching goal of this project is to migrate the current components, which utilise AngularJS with CoffeeScript and Bootstrap, to Angular framework with Typescript. AngularJS support has officially **ended as of January 2022**, meaning that no new issues or pull requests can be submitted.CoffeeScript has outlived its usefulness and falls short of more contemporary frameworks in terms of support, functionality, and security.

Developers can easily design dynamic single-page applications using Angular because to its component-based architecture. As TypeScript provides types and enables early problem identification, its use in its construction ensures improved security.

## ***Aims for Trimester***

- Use bottom-up progression to migrate at existing components
- Restrict the conflicts between the old and new components
- Gain experience to enable speedier growth in future trimesters
  
## ***Deliverables***

***Short Term:***

- Develop and deliver at components migration
- Carry on the components that are in the middle of migrating in last trimester
  
***Long Term:***

- Ensure all migrated components have been tested and function as expected by implementing test units.
- Prior to CoffeeScript support being removed, make sure that future team members are supported and set up for success to migrate all remaining components

## What to do next

If you are new member into this team, welcome! and we are going to guide you step by step to show you what you sould do next if you are:

***Junior***

As a junior we suggest that you should:

1. Do Upskilling understand the basic of AngularJS and Angular framework.
   - [Learning AngularJS A Guide to AngularJS Development](https://www.amazon.com.au/Learning-AngularJS-Guide-Development-ebook/dp/B00UW1MATQ) (ISBN 978-1491916759)
   - [Angular JS tutorial](https://www.youtube.com/playlist?list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl)
   - *To be added in next-trimester*
2. Set up the project on your local machine. For Windows user, you need to do an extra step to inistall a **WSL2 virtual machine**. Make sure you dont have VMware or VirtualBox installed that will enable the HyperV feature which **conflict** with Docker.
   - **Windows (WSL2)**
      1. Follow [Docker Compose with WSL2](Docker/Docker_Compose_with_WSL2.md) guideline.
      2. Read [Docker Setup Tutorial](Docker/Docker_Setup_Tutorial.md) guideline.
      3. Watch [Docker Setup Tutorial](https://drive.google.com/file/d/16A5zzG3g0S1B0PCKWrFK9anLhheXgi_b/view?usp=sharing)
            > Please note that the tutorial used Windows CMD enviroment, it should use WSL2 machine instead. See the [issue](https://teams.microsoft.com/l/message/19:bd20175d09414f079490a2403f7fca74@thread.tacv2/1659408245022?tenantId=d02378ec-1688-46d5-8540-1c28b5f470f6&amp;groupId=0e15669c-3f66-49aa-b023-640fe1dda2e0&amp;parentMessageId=1659398288375&amp;teamName=Thoth).
   - **Mac / Linux**
      1. Read [Docker Setup Tutorial](Docker/Docker_Setup_Tutorial.md) guideline.
    > If the servers in the docker running into issues, please follow the backup plan - [Troubleshooting Docker - Backup for OnTrack](Docker/Troubleshooting_Docker_Backup_for_OnTrack.md)
3. Migration
   1. Read [Create Brach and Initial Migration](Migration/Create_Brance_and_Initial_Migration) guideline.
   2. Read [Regular Commit](Migration/Regular_Migration_Step.md) guideline.
4. Testing
   1. Read [Unit Test](Testing/Unit_Test.md) guideline.
5. Do **report any issue** or questions to the senior or deilvery lead.
6. **Writting docemnts** during the learning process which you found intresting or worth to know.
7. Start to migrate some simple components.

***Senior***

1. Answer question from junior report the issue to the lead if no solution.
2. Carry on the components that are in the middle of migrating in last trimester.

**Once again, welcome to the team!**
