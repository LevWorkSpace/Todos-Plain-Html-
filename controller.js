function test() {
    alert("sdf");
}

function enterPressed() {
	if (event.keyCode == 13) {
		addTask();
	}
}

function addTask() {
    var task_name_input = document.getElementById('todo_input');

    if (task_name_input.value != '') {
    	var list_item = document.createElement('li');
    	list_item.setAttribute('class', 'task-list-item item-panel');
    	list_item.innerHTML = task_name_input.value;

	    var list = document.getElementById('task_list');
    	list.prepend(list_item);

    	task_name_input.value = "";
	}
}