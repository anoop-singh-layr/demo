import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

const userPool = new CognitoUserPool(poolData);

const attributeList = [];

const dataEmail = {
    Name : 'email',
    Value : 'user@example.com'
};

const attributeEmail = new CognitoUserAttribute(dataEmail);

attributeList.push(attributeEmail);

userPool.signUp('username', 'password', attributeList, null, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});

function Login() {
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username : 'sampleEmail@gmail.com',
        Password : 'SamplePassword123',
    });


    var userData = {
        Username : 'sampleEmail@gmail.com',
        Pool : userPool
    };

    });

}
