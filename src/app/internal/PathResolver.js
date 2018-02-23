export default {
    getEndpoints, resolveMain
}

export function getEndpoints(){
    var path = window.location.pathname.toLowerCase();

    if(path.charAt(path.length-1)=="/"){
        path = path.substring(0, path.length-1);
    }

    if(path.charAt(0)=="/"){
        path = path.substring(1, path.length);
    }

    return path.split("/");
}

export function resolveMain(newState){
    var depth = 0;

    if(newState!=="."){
        depth = (newState.match(/\//g) || []).length;
        if(history.state && history.state.hasOwnProperty("depth")){
            var back = "";

            for (var i = 0; i < history.state.depth; i++) {
                back += "../";
            }

            newState = back + newState;
        }
    }

    history.pushState({
        depth: depth
    }, null, newState);
}