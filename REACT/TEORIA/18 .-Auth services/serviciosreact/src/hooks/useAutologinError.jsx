const useAutologinError = (resLogin, setOkLogin) => {
  if (resLogin?.status == 200) {
    setOkLogin(() => true);
  }
};

export default useAutologinError;
