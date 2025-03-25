import React from "react";

function UserCards({
  profile_picture,
  name,
  email,
  rank,
}: {
  profile_picture: string;
  name: string;
  email: string;
  rank: string;
}) {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={profile_picture}
            alt={name}
          />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
            {name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {email}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-600 dark:text-white">
          {rank}
        </div>
      </div>
    </li>
  );
}

export default UserCards;
