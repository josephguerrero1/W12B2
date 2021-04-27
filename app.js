// Generate a random activity

function activity1() {

    function successFunction(response) {


        let button = document.getElementById("button");
        button.addEventListener("click", getActivity());
    }

    function failureFunction(error) {

    }

    axios.request({
        method: "GET",
        url: "https://www.boredapi.com/documentation"
    }).then(successFunction).catch(failureFunction);
}