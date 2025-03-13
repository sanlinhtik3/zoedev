export default function OneLink() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-200 p-4 flex flex-col">
        <div className="mb-6">
          <div className="text-2xl mb-8 cursor-pointer">*</div>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            {[
              { name: "Links", icon: "📱", active: true },
              { name: "Shop", icon: "🛍️" },
              { name: "Appearance", icon: "🎨" },
              { name: "Social Planner", icon: "📅" },
              { name: "Audience", icon: "👥" },
              { name: "Analytics", icon: "📊" },
              { name: "Settings", icon: "⚙️" },
            ].map((item, index) => (
              <li
                key={index}
                className={`flex items-center px-3 py-2 rounded-lg cursor-pointer ${
                  item.active
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

        {/* Updated Pro Section */}
        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="p-4 rounded-xl bg-gray-50">
            <p className="font-medium">Try Pro for free 😊</p>
            <p className="text-sm text-gray-600 mt-1">
              It's the most popular plan for content creators and businesses.
            </p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2.5 px-4 rounded-xl hover:bg-purple-700 transition-colors">
              Upgrade now
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2 px-2">
            <img
              src="https://yt3.ggpht.com/inR6MZjIF7RRdZTUCArsJjnt70GKxIVVDR4z-pUtYuIOjc1xYlhBtMuPFwoqwqgHs8Ox_Ta_=s88-c-k-c0x00ffffff-no-rj"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">@sanlinhtike</span>
          </div>
        </div>
      </div>

      {/* Main Content + Preview Layout */}
      <div className="flex-1 bg-gray-50 flex flex-col lg:flex-row">
        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Updated Header */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-2">
                <select className="text-xl font-semibold bg-transparent">
                  <option>Analytics</option>
                </select>
                <button className="text-gray-400 hover:text-gray-600">
                  <span>ℹ️</span>
                </button>
              </div>
              <button className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
                <span>Share</span>
              </button>
            </div>

            {/* Updated Profile Card */}
            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src="https://yt3.ggpht.com/inR6MZjIF7RRdZTUCArsJjnt70GKxIVVDR4z-pUtYuIOjc1xYlhBtMuPFwoqwqgHs8Ox_Ta_=s88-c-k-c0x00ffffff-no-rj"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">San Lin Htike</h2>
                  <p className="text-gray-600">
                    Web & Crypto ⚡ free ဗဟုသုတ Channel ၏အိမ်ယာ
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <span>▶️</span>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <span>📱</span>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <span>💬</span>
                    </button>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  •••
                </button>
              </div>
            </div>

            {/* Updated Action Buttons */}
            <button className="w-full bg-purple-600 text-white py-3.5 rounded-xl mb-4 hover:bg-purple-700 font-medium transition-colors">
              + Add
            </button>

            <div className="flex gap-3 mb-6">
              <button className="flex-1 py-2.5 px-4 bg-white rounded-xl hover:bg-gray-50 text-gray-700 shadow-sm transition-colors">
                Add collection
              </button>
              <button className="flex-1 py-2.5 px-4 bg-white rounded-xl hover:bg-gray-50 text-gray-700 shadow-sm transition-colors">
                View archive
              </button>
            </div>

            {/* Updated Links Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Layout</span>
                  <span className="text-gray-500 text-sm">0 links</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <span>📋</span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <span>🗑️</span>
                  </button>
                  <div className="w-12 h-6 bg-purple-600 rounded-full cursor-pointer"></div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 text-center">
                <p className="text-gray-600">
                  Drag and drop links into this collection. You can reorder
                  links after they are added.
                </p>
              </div>
            </div>
          </div>

          {/* Preview Panel - Updated positioning */}
          <div className="w-full lg:w-[320px] p-4 bg-white lg:bg-transparent border-t lg:border-t-0 lg:border-l border-gray-200">
            <div className="lg:sticky lg:top-4">
              <div className="bg-white rounded-3xl shadow-lg p-6 mb-4">
                <div className="flex flex-col items-center">
                  <img
                    src="https://yt3.ggpht.com/inR6MZjIF7RRdZTUCArsJjnt70GKxIVVDR4z-pUtYuIOjc1xYlhBtMuPFwoqwqgHs8Ox_Ta_=s88-c-k-c0x00ffffff-no-rj"
                    alt="Profile"
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <h3 className="font-semibold mb-1">San Lin Htike</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Web & Crypto ⚡ free ဗဟုသုတ Channel ၏အိမ်ယာ
                  </p>
                  <div className="flex gap-3 mb-4">
                    <span>▶️</span>
                    <span>📱</span>
                    <span>💬</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Hide Linktree logo
                  </span>
                  <div className="w-10 h-6 bg-gray-200 rounded-full cursor-pointer transition-colors hover:bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
