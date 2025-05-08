type ContactCardProps = {
    name: string;
    email: string;
    phone?: string; 
  }


const ContactCard: React.FC<ContactCardProps> = ({ name, email, phone }) => {
    return (
      <div className="p-4 border rounded shadow-md bg-white max-w-sm">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-700">{email}</p>
        {phone && <p className="text-gray-500">Phone: {phone}</p>}
      </div>
    );
  }
  
  export default ContactCard;
  