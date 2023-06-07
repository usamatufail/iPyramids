export const newsLetterSignup = async ({
  email = '',
  tags = ['news-letter'],
}) => {
  try {
    const contact = await fetch(`https://rest.gohighlevel.com/v1/contacts/`, {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjZTMnRTa0d4ZWxTVkxHODJlN0szIiwiY29tcGFueV9pZCI6InZHbmZ3Z1dia1RWd1F0YzZIeXRCIiwidmVyc2lvbiI6MSwiaWF0IjoxNjgwMzE1ODY3MDc0LCJzdWIiOiJTblpTMTlmNUJVV204cFJPR0twMSJ9.K3UJn2X3eDxVLVtcha_RAlw_Rdad5VP-lm2RYqSkol4`,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email,
        tags,
        source: 'news-letter',
      }),
    });
    console.log(contact);
    return contact;
  } catch (error) {
    console.log(error);
  }
};

export const subscribe = async ({
  setLoading,
  email,
  setEmail,
  message,
  tags,
  // notification = '',
}) => {
  setLoading(true);
  if (!email) {
    message.error('Please enter email to continue');
  } else {
    await newsLetterSignup({email, tags});
    setEmail('');
  }
  setLoading(false);
};
