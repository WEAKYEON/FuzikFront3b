export default defineEventHandler((event) => {

    const { realm_id } = getQuery(event);
    const { user_email } = getQuery(event);

    var path = 'https://tetrasolution.com/token_app/api/check_balance_by_email.php?q=a';

    if (realm_id==undefined) {

    } else {
        path = path + '&realm_id=' + realm_id;
    }

    if (user_email==undefined) {

    } else {
        path = path + '&email_account=' + user_email;
    }

    const response = $fetch(path);
    //console.log("response: " + response);
    return response;
  });
