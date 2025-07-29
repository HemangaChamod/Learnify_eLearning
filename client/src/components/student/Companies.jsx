import React from 'react';
import {
  AcademicCapIcon,
  UserGroupIcon,
  UserCircleIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/solid';

const StatsStripe = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Stat 1 */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <AcademicCapIcon className="h-10 w-10 text-purple-600" />
            <div>
              <p className="text-3xl font-bold text-gray-900">120+</p>
              <p className="text-gray-600 text-sm">Certified Online Courses</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <UserGroupIcon className="h-10 w-10 text-purple-600" />
            <div>
              <p className="text-3xl font-bold text-gray-900">75k+</p>
              <p className="text-gray-600 text-sm">Happy Students Worldwide</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <AcademicCapIcon className="h-10 w-10 text-purple-600" />
            <div>
              <p className="text-3xl font-bold text-gray-900">300+</p>
              <p className="text-gray-600 text-sm">Expert Instructors</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <DevicePhoneMobileIcon className="h-10 w-10 text-purple-600" />
            <div>
              <p className="text-3xl font-bold text-gray-900">99.9%</p>
              <p className="text-gray-600 text-sm">Mobile Learning Access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsStripe;
