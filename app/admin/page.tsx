import Link from "next/link";
import FormRow from "../components/FormRow";
import Header from "../components/Header";

export default function Admin() {
  return (
    <div>
      <Header title="Admin Login" label="admin" />
      <div className="flex justify-center">
        <form className="bg-gray-100 px-4 py-8 rounded w-full max-w-[400px] flex flex-col gap-4">
          <p className="">Login Form</p>
          <FormRow placeholder="username" />
          <FormRow placeholder="email" />
          <FormRow placeholder="password" />
          <div>
            <button className="bg-[#0F468E] rounded-full text-white px-6 py-2">
              <Link href="/admin/portal">Login</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
