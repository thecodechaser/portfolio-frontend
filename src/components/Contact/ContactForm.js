const ContactForm = () => {
  return (
    <div className="flex flex-col md:items-center md:mr-48">
      <form className="flex flex-col gap-4 w-96 items-center">
      <input type="text" name="user_name" required maxlength="30" placeholder="Name" id="name" />
        <input type="email" name="user_email" required placeholder="Email" id="email" />
        <textarea cols="30" rows="10" name="user_msg" required maxlength="500"
          placeholder="Write your message here" id="msg"></textarea>
      </form>
    </div>
  )
}

export default ContactForm;