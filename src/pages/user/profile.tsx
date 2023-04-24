import { PageProps } from "@/interfaces/page-props.interface"
import HomeLayout from "@/layouts/home"
import UserLayout from "@/layouts/user"
import FormUpdateUserProfile from "@/modules/user/components/FormUpdateUserProfile"
import ModalChangeUserPassword from "@/modules/user/components/ModalChangeUserPassword"
import { UserRole } from "@/modules/user/interfaces/user.interface"
import { GetStaticPropsResult } from "next"
import { useState } from "react"

export function getStaticProps(): GetStaticPropsResult<PageProps> {
  return {
    props: {
      title: "Hồ sơ người dùng",
      roles: [UserRole.USER, UserRole.ADMIN],
    },
  }
}

export default function UserProfilePage() {
  const [visibleChangeUserPassword, setVisibleChangeUserPassword] =
    useState(false)

  return (
    <HomeLayout>
      <UserLayout>
        <FormUpdateUserProfile
          onChangeUserPassword={setVisibleChangeUserPassword.bind(null, true)}
        />
      </UserLayout>
      <ModalChangeUserPassword
        visible={visibleChangeUserPassword}
        onClose={setVisibleChangeUserPassword.bind(null, false)}
      />
    </HomeLayout>
  )
}
