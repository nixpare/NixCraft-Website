export enum ProfileImageType {
	ARMOR_BUST,
	HEADHELM
}

function profileImageTypeURL(type: ProfileImageType): string {
	switch (type) {
		case ProfileImageType.ARMOR_BUST:
			return "armor_bust"
		case ProfileImageType.HEADHELM:
			return "headhelm"
	}
}

const cache = new Map <ProfileImageType, Map<string, any>>([
	[ProfileImageType.ARMOR_BUST, new Map<string, any>()],
	[ProfileImageType.HEADHELM, new Map<string, any>()],
])

export async function getProfileImage(username: string, type = ProfileImageType.ARMOR_BUST): Promise<any> {
	const imageTypeCache = cache.get(type)
	let data = imageTypeCache?.get(username)
	
	if (data) return data;

	const resp = await fetch(`/profile/${username}?type=${profileImageTypeURL(type)}`)
	if (!resp.ok) throw new Error(await resp.text());

	data = await resp.blob()
	imageTypeCache?.set(username, data)
	return data
}