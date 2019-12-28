const email = prompt('Enter email');

if (!email || !/\S/.test(email)) {
    alert('Canceled.');
} else if(email.length < 5) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    const password = prompt('Enter password');
    if (!password || !/\S/.test(password)) {
        alert('Canceled.');
    } else if (email === 'user@gmail.com') {
        if (password === 'UserPass') {
            if (confirm('Do you want to change your password?')) {
                const oldPassword = prompt('Enter old password');
                if (!oldPassword || !/\S/.test(oldPassword)) {
                    alert('Canceled.');
                } else if (oldPassword !== password) {
                    alert('Wrong password');
                } else {
                    const newPassword = prompt('Enter new password');
                    if (!newPassword || !/\S/.test(newPassword)) {
                        alert('Canceled.');
                    } else if(newPassword.length < 6) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        const confirmNewPassword = prompt('Enter new password again');
                        if (confirmNewPassword !== newPassword) {
                            alert('You wrote the wrong password.');
                        } else {
                            alert('You have successfully changed your password.');
                        }
                    }
                }
            } else {
                alert('You have failed the change.');
            }
        } else {
            alert('Wrong password');
        }
    } else if (email === 'admin@gmail.com') {
        if (password === 'AdminPass') {
            if (confirm('Do you want to change your password?')) {
                const oldPassword = prompt('Enter old password');
                if (!oldPassword || !/\S/.test(oldPassword)) {
                    alert('Canceled.');
                } else if (oldPassword !== password) {
                    alert('Wrong password');
                } else {
                    const newPassword = prompt('Enter new password');
                    if (!newPassword || !/\S/.test(newPassword)) {
                        alert('Canceled.');
                    } else if(newPassword.length < 6) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        const confirmNewPassword = prompt('Enter new password again');
                        if (confirmNewPassword !== newPassword) {
                            alert('You wrote the wrong password.');
                        } else {
                            alert('You have successfully changed your password.');
                        }
                    }
                }
            } else {
                alert('You have failed the change.');
            }
        } else {
            alert('Wrong password');
        }
    }
} else {
    alert('I don’t know you');
}