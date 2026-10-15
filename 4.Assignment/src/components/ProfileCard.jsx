function ProfileCard({ name, role, description, initials }) {
    return (
        <section className="profile-card">

            <div className="profile-image">
                <span>{initials}</span>
            </div>

            <div className="profile-content">
                <p className="profile-role">{role}</p>

                <h2>{name}</h2>

                <p className="profile-description">
                    {description}
                </p>

                <button className="profile-button">
                    View Profile
                </button>
            </div>

        </section>
    );
}

export default ProfileCard;