convertSemverToNumber = (semver: string) => {
  return parseInt(semver.split('.').map((v, index) => {
    let version = v;

    if (index === 1) {
      version = '00' + v;
    } else if (index === 2) {
      version = '0' + v;
    }

    return version;
  }).join(''), 10);
}
