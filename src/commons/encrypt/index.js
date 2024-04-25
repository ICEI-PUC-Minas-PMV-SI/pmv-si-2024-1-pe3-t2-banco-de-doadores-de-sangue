const encrypt = (text) => {
  const sha1Hash = new Hashes.SHA1();
  const encryptedText = sha1Hash.hex(text);
  return encryptedText;
};
