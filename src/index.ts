interface Props{
    id:string,
    content:string,
    category:string,
    tag:string,
    isCompleted: boolean;
}
/**
 * 할 일을 추가할 수 있다.
* 내용없이 추가할 수 없다.
 */
function createToto(content:string){

}
/**
 * 모든 할 일을 조회할 수 있다.
* ID를 기반으로 특정 할 일을 조회할 수 있다.
 */
function readTodo():{}{
        return {};
}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
특정 할 일의 특정 태그를 수정할 수 있다.
 */

function updateTodo(id:string, content:string,category:string,tag:string,isCompleted:boolean):{}{
    return {};
}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
*모든 할 일을 제거할 수 있다.
*특정 할 일의 특정 태그를 삭제할 수 있다.
*특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteTodo(id:string):{}{
    return {};
}