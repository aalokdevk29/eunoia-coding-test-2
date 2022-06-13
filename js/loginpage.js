var loginpage;

function loginpageInit() {
    loginpage = new Vue({
        el: "#loginpage",
        data: {
            isCurrent: false,
            username: "",
            email: "",
            password: "",
        },
        methods: {
            submit() {
                if (this.email === '' | this.password === '') {
                    alert('Please fill all fields');
                } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                    let username = this.email.split('@')[0];
                    USER = username;
                    showPage("homepage");
                } else {
                    alert('Invalid Email Id');
                }
            }
        },
        watch: {
            isCurrent: function (val) {
                if (val) {
                    this.username = USER;
                }
            },
        }
    });

    return loginpage;
}
