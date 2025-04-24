export default function SettingsContent(){
 return <div className="bg-gray-800 rounded-2xl p-8 space-y-10 shadow-lg">
 {/* 1. Profile */}
 <section className="space-y-3">
   <h2 className="text-2xl font-semibold">Profile</h2>
   <p className="text-gray-400">Set your account details</p>

   <div className="flex items-start gap-6">
     {/* Inputs */}
     <div className="grid grid-cols-2 gap-4 flex-1">
       <input
         className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
         placeholder="Name"
       />
       <input
         className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
         placeholder="Surname"
       />
       <input
         type="email"
         className="p-3 col-span-2 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
         placeholder="Email"
       />
     </div>

     {/* Avatar */}
     <div className="flex flex-col items-center space-y-2">
       <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden">
         <img src="/avatar.jpg" alt="Avatar" className="w-full h-full object-cover" />
       </div>
       <button className="px-4 py-1 text-sm bg-gray-700 rounded-lg hover:bg-gray-600">
         Edit photo
       </button>
     </div>
   </div>
 </section>

 {/* 2. Timezone & Preferences */}
 <section className="space-y-3">
   <h2 className="text-2xl font-semibold">Timezone & Preferences</h2>
   <p className="text-gray-400">Let us know the time zone and format</p>

   <div className="grid grid-cols-3 gap-4">
     <input
       className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
       placeholder="City"
     />
     <select className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500">
       <option>UTC/GMT -4 hours</option>
       <option>UTC/GMT +0 hours</option>
     </select>
     <select className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500">
       <option>dd/mm/yyyy 00:00</option>
       <option>mm/dd/yyyy 00:00</option>
     </select>
   </div>
 </section>

 {/* 3. Motivation & Performance setup */}


 {/* 4. Your Work */}
 <section className="space-y-3">
   <h2 className="text-2xl font-semibold">Your work</h2>
   <p className="text-gray-400">Add info about your position</p>

   <div className="grid grid-cols-2 gap-4">
     <input
       className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
       placeholder="Function"
     />
     <input
       className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
       placeholder="Job Title"
     />
   </div>
 </section>
</div>

}