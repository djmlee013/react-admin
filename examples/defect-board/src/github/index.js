import GitHub from 'github-api';


// const gh = new GitHub({
//     token: 'a82c10fbfd3958a388f87f466d8c4b9ced512847'
// });

const getNotifications = () => {

    const gh = new GitHub({
        token: 'a82c10fbfd3958a388f87f466d8c4b9ced512847'
    });

    let me = gh.getUser();
    return me.listNotifications((err, notifications) => {
        console.log(notifications);
    });
}

export default getNotifications