const ContactForm = () => {
  return (
    <div className="flex flex-col mt-10 md:items-center md:mr-52">
      <h3 className="text-xl font-bold text-skyColor mb-4">Let's Chat</h3>
      <form className="flex flex-col gap-4 w-96 items-center">
      <input type="text" name="user_name" required maxlength="30" placeholder="Name" className="w-72 md:w-80 p-2 rounded text-primaryColor" />
        <input type="email" name="user_email" required placeholder="Email" className="w-72 md:w-80 p-2 rounded text-primaryColor"  />
        <textarea  rows="10" name="user_msg" required maxlength="500"
          placeholder="Write your message here" className="w-72 md:w-80 p-2 rounded text-primaryColor"></textarea>
          <button type="submit" className="bg-secondaryColor ml-4 md:ml-0 mt-5 rounded px-4 py-2 text-base text-primaryColor">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm;