const verifyLoggedUser = () => {
  const loggedUser = getSignedInUser();
  console.log(loggedUser)
  if (!loggedUser || !loggedUser?.userId) {
    window.location.assign('../signin/index.html');
  }
}

const verifyUserIsAlreadyLogged = () => {
  const loggedUser = getSignedInUser();
  console.log(loggedUser)
  if (loggedUser?.userId) {
    const { isRepresentative } = findUserById(loggedUser.userId);

    if (isRepresentative) {
      window.location.assign('../representative-screen/index.html');
    } else {
      window.location.assign('../donor-screen/index.html');
    }
  }
}

const verifyRepresentativeUser = () => {
  verifyLoggedUser();

  const { userId } = getSignedInUser();
  const { isRepresentative } = findUserById(userId);

  if (!isRepresentative) {
    window.location.assign('../donor-screen/index.html');
  }
}