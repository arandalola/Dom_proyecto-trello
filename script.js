document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.project').addEventListener('click', event => {
        let cajaPrincipal= document.createElement('div');
        cajaPrincipal.setAttribute("class", "cajaPrincipal");
        document.querySelector('.principal').appendChild(cajaPrincipal);

        let projectName = document.createElement('input');
        projectName.placeholder='Project name';
        projectName.setAttribute("class", "projectName");
        
        let taskButton = document.createElement('button');
        taskButton.innerText='New Task';
        taskButton.setAttribute("class", "taskButton");
        taskButton.addEventListener('click', event =>{

            let cajaTask = document.createElement('div');
            cajaTask.setAttribute("class", "cajaTask");
            document.querySelector('.board').appendChild(cajaTask);

            let task = document.createElement('div');
            task.setAttribute("class", "task");
            document.querySelector('.cajaTask').appendChild(task);

            let taskName = document.createElement('input');
            taskName.placeholder='Task name';
            task.appendChild(taskName);

            let date = document.createElement('input');
            date.setAttribute("class", "date");
            date.setAttribute("type", "date");
            task.appendChild(date);

            let memberName = document.createElement('div');
            memberName.innerText='Members';
            memberName.setAttribute("class", "memberName");
            task.appendChild(memberName);

            let member = document.createElement('input');
            member.setAttribute("class", "member");
            member.setAttribute("type", "file");
            memberName.appendChild(member);

            let detailsName = document.createElement('div');
            detailsName.innerText = 'Details';
            detailsName.setAttribute("class", "detailsName");
            task.appendChild(detailsName);

            let details = document.createElement('input');
            details.setAttribute("class", "details");
            details.setAttribute("type", "text");
            detailsName.appendChild(details);

            let divStatus = document.createElement('div');
            divStatus.setAttribute("class", "divStatus");
            task.appendChild(divStatus);

            let statusName0 = document.createElement('label');
            statusName0.innerText='To do';
            statusName0.setAttribute("class", 'statusName');
            statusName0.setAttribute("for", 'status');
            divStatus.appendChild(statusName0);

            let status0 = document.createElement('input');
            status0.setAttribute("type", "radio");
            status0.setAttribute("name", "status");
            status0.setAttribute("class", "status");
            divStatus.appendChild(status0);

            let statusName1 = document.createElement('label');
            statusName1.innerText='Done';
            statusName1.setAttribute("class", 'statusName');
            statusName1.setAttribute("for", 'status');
            divStatus.appendChild(statusName1);

            let status1 = document.createElement('input');
            status1.setAttribute("type", "radio");
            status1.setAttribute("name", "status");
            status1.setAttribute("class", "status");
            divStatus.appendChild(status1);

            let dateEndName = document.createElement('div');
            dateEndName.innerText = 'Date end';
            dateEndName.setAttribute("class", "dateEndName");
            task.appendChild(dateEndName);

            let dateEnd = document.createElement('input');
            dateEnd.setAttribute("class", "date");
            dateEnd.setAttribute("type", "date");
            dateEndName.appendChild(dateEnd);

            let check = document.createElement('input');         
            check.setAttribute("class", "checkbox");              
            task.appendChild(check);                                      
        })
        cajaPrincipal.appendChild(projectName);
        cajaPrincipal.appendChild(taskButton);
    })
})
