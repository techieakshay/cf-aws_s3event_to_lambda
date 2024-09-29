
exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const paths = [];
    for (const record of event.Records) {
        const bucket = record.s3.bucket.name;
        const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));
        console.log(`New file uploaded: ${bucket}/${key}`);
        paths.push(`${bucket}/${key}`);
    }

    return {
        statusCode: 200,
        body: {
            "paths" : paths
        },
    };
};