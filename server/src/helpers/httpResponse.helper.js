export const errorResponse = (res, err) => {
    return res.status(500)
        .json({
            data: null,
            message: err.message || 'Something went wrong',
            status: 'failed'
        })
}

export const successResponse = (res, data, code=200) => {
    res.status(code).send({
        data: data.data || null,
        message: data.message || "",
        status: 'success'
    });
}
