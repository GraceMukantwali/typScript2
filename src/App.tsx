import React from 'react';
import ContactCard from './Components/ContactCard';

const App: React.FC = () => {
  return (
    <div className="p-6 space-y-4">
      <h1>Names ,email,phone</h1>
      <ContactCard name="Grace Mukantwali" email="megagradus@gmail.com" phone="+250788123456" />
      <ContactCard name="Uwera Benitha" email="Uwebenitha@gmail.com" phone="+078678902"  />
    </div>
  );
};

export default App;
