

const userTypes={
    customer:"CUSTOMER",
    admin:"ADMIN"
}

const userStatus={
    pending:"PENDING",
    approved:"APPROVED",
    rejected:"REJECTED"
}

const releaseStatus={
    released:"RELEASED",
    unreleased:"UNRELEASED",
    blocked:"BLOCKED"
}

const bookingStatus={
    inProgress:"IN_PROGRESS",
    completed:"COMPLETED",
    cancelled:"CANCELLED",
    expired:"EXPIRED",
    failed:"FAILED"
}

const paymentStatus={
    pending:"PENDING",
    success:"SUCCESS",
    failed:"FAILED"
}



module.exports={
    userTypes,
    userStatus,
    releaseStatus,
    bookingStatus,
    paymentStatus
}