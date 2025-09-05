import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, password, email, age, dob, gender, terms, country, bio });
    // Reset form
    setName("");
    setPassword("");
    setEmail("");
    setAge("");
    setDob("");
    setGender("");
    setTerms(false);
    setCountry("");
    setBio("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-[350px] flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center text-purple-700">
          Registration Form
        </h1>

        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Age */}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Date of Birth */}
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Gender - Radio */}
        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        {/* Country - Select */}
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select Country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>

        {/* Bio - Textarea */}
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Short Bio"
          rows="3"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>

        {/* Terms - Checkbox */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={terms}
            onChange={() => setTerms(!terms)}
          />
          Accept Terms & Conditions
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
