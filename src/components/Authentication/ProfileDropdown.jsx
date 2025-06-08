import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../../Backend/Auth/firebase";
import { signOut, updateProfile, updatePassword } from "firebase/auth";
import styled, { keyframes } from "styled-components";
import {
  FaUser,
  FaClinicMedical,
  FaUserShield,
  FaCog,
  FaSignOutAlt,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { MdEmergency } from "react-icons/md";

// ... (keep all previous styled components)

const EditButton = styled.button`
  background: none;
  border: none;
  color: #1e88e5;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 15px;

  h4 {
    margin: 0 0 5px 0;
    color: #7f8c8d;
    font-size: 0.9rem;
    font-weight: 500;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #2c3e50;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
  }
`;
// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

// Styled Components
const ProfileContainer = styled.div`
  position: relative;
  z-index: 1000;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2c3e50;
  font-weight: 600;
  transition: all 0.2s ease;
  padding: 8px 12px;
  border-radius: 8px;

  &:hover {
    background: rgba(30, 136, 229, 0.1);
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #1e88e5;
  }
`;

const ProfileDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  animation: ${fadeIn} 0.2s ease-out;
  transform-origin: top right;
`;

const MenuHeader = styled.div`
  padding: 16px;
  background: linear-gradient(135deg, #1e88e5, #0d47a1);
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid white;
  }

  div {
    h3 {
      margin: 0;
      font-size: 1.1rem;
    }

    p {
      margin: 4px 0 0;
      font-size: 0.85rem;
      opacity: 0.9;
    }
  }
`;

const MenuSection = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
`;

const MenuItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;
  color: #2c3e50;

  &:hover {
    background: #f5f7fa;
    color: #1e88e5;

    svg {
      color: #1e88e5;
    }
  }

  svg {
    color: #7f8c8d;
    font-size: 1.1rem;
    transition: all 0.2s ease;
  }

  span {
    flex: 1;
  }

  &.active {
    background: #f0f7ff;
    color: #1e88e5;
    font-weight: 500;

    svg {
      color: #1e88e5;
    }
  }
`;

const ProfileContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 999;
  animation: ${slideIn} 0.3s ease-out;
  overflow-y: auto;
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #7f8c8d;
  z-index: 10;

  &:hover {
    color: #2c3e50;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #2c3e50;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 0.95rem;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: #1e88e5;
      box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.2);
    }
  }
`;

const SaveButton = styled.button`
  background: #1e88e5;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 10px;

  &:hover {
    background: #1565c0;
  }

  &:disabled {
    background: #90caf9;
    cursor: not-allowed;
  }
`;

const ProfileSection = () => {
  const [editMode, setEditMode] = useState({
    personal: false,
    medical: false,
    emergency: false,
    security: false,
  });

  const toggleEditMode = (section) => {
    setEditMode((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bloodType: "",
    allergies: "",
    conditions: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
  });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      setUserData((prev) => ({
        ...prev,
        name: auth.currentUser.displayName || "",
        email: auth.currentUser.email || "",
      }));
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: userData.name,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile: " + error.message);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      await updatePassword(auth.currentUser, newPassword);
      alert("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Password update error:", error);
      alert("Failed to update password: " + error.message);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <ProfileContent>
            <CloseButton
              onClick={() => {
                setActiveTab(null);
                setEditMode((prev) => ({ ...prev, personal: false }));
              }}
            >
              ×
            </CloseButton>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>
                Personal Information
              </h2>
              {!editMode.personal && (
                <EditButton onClick={() => toggleEditMode("personal")}>
                  <FaEdit /> Edit
                </EditButton>
              )}
            </div>

            {editMode.personal ? (
              <form onSubmit={handleUpdateProfile}>
                <FormGroup>
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <label>Email</label>
                  <input type="email" value={userData.email} disabled />
                </FormGroup>
                <FormGroup>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <label>Address</label>
                  <textarea
                    value={userData.address}
                    onChange={(e) =>
                      setUserData({ ...userData, address: e.target.value })
                    }
                    rows="3"
                  />
                </FormGroup>
                <div style={{ display: "flex", gap: "10px" }}>
                  <SaveButton type="submit">
                    <FaSave /> Save
                  </SaveButton>
                  <button
                    type="button"
                    onClick={() => toggleEditMode("personal")}
                    style={{
                      background: "none",
                      border: "1px solid #e0e0e0",
                      padding: "12px 20px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <FaTimes /> Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <InfoItem>
                  <h4>Full Name</h4>
                  <p>{userData.name || "Not provided"}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Email</h4>
                  <p>{userData.email || "Not provided"}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Phone Number</h4>
                  <p>{userData.phone || "Not provided"}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Address</h4>
                  <p>{userData.address || "Not provided"}</p>
                </InfoItem>
              </div>
            )}
          </ProfileContent>
        );

      case "medical":
        return (
          <ProfileContent>
            <CloseButton
              onClick={() => {
                setActiveTab(null);
                setEditMode((prev) => ({ ...prev, medical: false }));
              }}
            >
              ×
            </CloseButton>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>
                Medical Information
              </h2>
              {!editMode.medical && (
                <EditButton onClick={() => toggleEditMode("medical")}>
                  <FaEdit /> Edit
                </EditButton>
              )}
            </div>

            {editMode.medical ? (
              <form>
                <FormGroup>
                  <label>Blood Type</label>
                  <select
                    value={userData.bloodType}
                    onChange={(e) =>
                      setUserData({ ...userData, bloodType: e.target.value })
                    }
                  >
                    <option value="">Select blood type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label>Allergies</label>
                  <textarea
                    value={userData.allergies}
                    onChange={(e) =>
                      setUserData({ ...userData, allergies: e.target.value })
                    }
                    rows="3"
                  />
                </FormGroup>
                <FormGroup>
                  <label>Medical Conditions</label>
                  <textarea
                    value={userData.conditions}
                    onChange={(e) =>
                      setUserData({ ...userData, conditions: e.target.value })
                    }
                    rows="3"
                  />
                </FormGroup>
                <div style={{ display: "flex", gap: "10px" }}>
                  <SaveButton type="button">
                    <FaSave /> Save
                  </SaveButton>
                  <button
                    type="button"
                    onClick={() => toggleEditMode("medical")}
                    style={{
                      background: "none",
                      border: "1px solid #e0e0e0",
                      padding: "12px 20px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <FaTimes /> Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <InfoItem>
                  <h4>Blood Type</h4>
                  <p>{userData.bloodType || "Not provided"}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Allergies</h4>
                  <p>{userData.allergies || "None reported"}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Medical Conditions</h4>
                  <p>{userData.conditions || "None reported"}</p>
                </InfoItem>
              </div>
            )}
          </ProfileContent>
        );

      case "emergency":
        return (
          <ProfileContent>
            <CloseButton onClick={() => setActiveTab(null)}>×</CloseButton>
            <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>
              Emergency Contacts
            </h2>
            <form>
              <FormGroup>
                <label>Contact Name</label>
                <input
                  type="text"
                  value={userData.emergencyName}
                  onChange={(e) =>
                    setUserData({ ...userData, emergencyName: e.target.value })
                  }
                  placeholder="Full name"
                />
              </FormGroup>
              <FormGroup>
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={userData.emergencyPhone}
                  onChange={(e) =>
                    setUserData({ ...userData, emergencyPhone: e.target.value })
                  }
                  placeholder="+1 (123) 456-7890"
                />
              </FormGroup>
              <FormGroup>
                <label>Relationship</label>
                <input
                  type="text"
                  value={userData.emergencyRelation}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      emergencyRelation: e.target.value,
                    })
                  }
                  placeholder="Spouse, parent, etc."
                />
              </FormGroup>
              <SaveButton type="button">Save Emergency Contact</SaveButton>
            </form>
          </ProfileContent>
        );
      case "security":
        return (
          <ProfileContent>
            <CloseButton onClick={() => setActiveTab(null)}>×</CloseButton>
            <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>
              Security Settings
            </h2>
            <form onSubmit={handleUpdatePassword}>
              <FormGroup>
                <label>Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                />
              </FormGroup>
              <FormGroup>
                <label>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </FormGroup>
              <FormGroup>
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
              </FormGroup>
              <SaveButton
                type="submit"
                disabled={
                  !currentPassword ||
                  !newPassword ||
                  newPassword !== confirmPassword
                }
              >
                Change Password
              </SaveButton>
            </form>
          </ProfileContent>
        );
      case "account":
        return (
          <ProfileContent>
            <CloseButton onClick={() => setActiveTab(null)}>×</CloseButton>
            <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>
              Account Actions
            </h2>
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ color: "#e74c3c", marginBottom: "10px" }}>
                Danger Zone
              </h3>
              <button
                onClick={handleLogout}
                style={{
                  background: "#e74c3c",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </ProfileContent>
        );
      default:
        return null;
    }
  };

  return (
    <ProfileContainer>
      <ProfileButton onClick={() => setIsOpen(!isOpen)}>
        <img
          src={auth.currentUser?.photoURL || "/default-profile.png"}
          alt="Profile"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/default-profile.png";
          }}
        />
        <span>{auth.currentUser?.displayName || "My Account"}</span>
      </ProfileButton>

      {isOpen && (
        <ProfileDropdown onClick={(e) => e.stopPropagation()}>
          <MenuHeader>
            <img
              src={auth.currentUser?.photoURL || "/default-profile.png"}
              alt="Profile"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default-profile.png";
              }}
            />
            <div>
              <h3>{auth.currentUser?.displayName || "User"}</h3>
              <p>{auth.currentUser?.email || ""}</p>
            </div>
          </MenuHeader>

          <MenuSection>
            <MenuItem
              onClick={() => {
                setActiveTab("personal");
                setIsOpen(false);
              }}
              className={activeTab === "personal" ? "active" : ""}
            >
              <FaUser />
              <span>Personal Information</span>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActiveTab("medical");
                setIsOpen(false);
              }}
              className={activeTab === "medical" ? "active" : ""}
            >
              <FaClinicMedical />
              <span>Medical Information</span>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActiveTab("emergency");
                setIsOpen(false);
              }}
              className={activeTab === "emergency" ? "active" : ""}
            >
              <MdEmergency style={{ fontSize: "1.2rem" }} />
              <span>Emergency Contacts</span>
            </MenuItem>
          </MenuSection>

          <MenuSection>
            <MenuItem
              onClick={() => {
                setActiveTab("security");
                setIsOpen(false);
              }}
              className={activeTab === "security" ? "active" : ""}
            >
              <FaUserShield />
              <span>Security</span>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActiveTab("account");
                setIsOpen(false);
              }}
              className={activeTab === "account" ? "active" : ""}
            >
              <FaCog />
              <span>Account Actions</span>
            </MenuItem>
          </MenuSection>
        </ProfileDropdown>
      )}

      {renderContent()}

      {/* Overlay when profile content is open */}
      {activeTab && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
          onClick={() => setActiveTab(null)}
        />
      )}
    </ProfileContainer>
  );
};

export default ProfileSection;
