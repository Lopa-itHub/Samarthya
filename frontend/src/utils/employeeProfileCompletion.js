export function calculateProfileCompletion(
  user,
  profile
) {

  let score = 0;

  if (user?.profileImage) score += 10;

  if (profile?.coverImage) score += 5;

  if (profile?.phone) score += 10;

  if (profile?.jobType) score += 10;

  if (profile?.experience) score += 10;

  if (profile?.gender) score += 5;

  if (profile?.location) score += 10;

  if (profile?.about) score += 10;

  if (
    profile?.skills?.length > 0
  ) score += 10;

  if (
    profile?.languages?.length > 0
  ) score += 5;

  if (
    profile?.certifications?.length > 0
  ) score += 10;

  if (
    profile?.professionalLinks?.length > 0
  ) score += 5;

  return score;

}