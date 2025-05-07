import React from 'react'
import settings from "../assets/settings.avif"

function Settings() {
  return (
    <>
    <div className="p-4 md:m-4 bg-gray-200 rounded-lg">
      <div className="flex gap-4">
      <div className=""><img src={settings} width={400} /></div>
      <div className="">
      <h1 className="text-2xl font-bold mb-2 md:mb-2">Settings</h1>
      <p className="text-base mb-2 md:mb-2">
        Manage your account settings and preferences here.
      </p>
      <div className="md:mt-6">
        <div className="mb-2 md:mb-6 p-4 bg-white max-w-lg rounded-lg">
          <h2 className="text-xl font-semibold text-black mb-2">
            Delete Account
          </h2>
          <p className="text-sm text-black mb-4">
            Permanently delete your account. This action cannot be undone.
          </p>
          {/* <p className="text-sm text-gray-600 mb-4">
            Note: All your data will be erased, and you will lose access to your
            account.
          </p> */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Delete Account
          </button>
        </div>

        <div className="p-4 bg-white max-w-lg rounded-lg">
          <h2 className="text-xl font-semibold text-black mb-2">
            Deactivate Account
          </h2>
          <p className="text-sm text-black mb-4">
            Temporarily deactivate your account. You can reactivate it anytime.
          </p>
          {/* <p className="text-sm text-gray-600 mb-4">
            Note: Your data will remain intact, but you will not be able to use
            your account until reactivated.
          </p> */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Deactivate Account
          </button>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Settings